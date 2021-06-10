<?php

$dom = new DOMDocument();
$dom->loadHTMLFile("produse.html");
$xpath = new DOMXpath($dom);

$connect = new mysqli('localhost', 'root', '', 'perma');

if($connect->connect_error) {
  die('Conectarea la baza de date a esuat.');
}
$connect->set_charset("utf8mb4");

$sql = "SELECT * FROM parfumuri WHERE ocazie IS NOT NULL";
$ocazii = $connect->query($sql);
//$node = $xpath->query('//div[contains(@class, "products")]');
$node = $dom->getElementsByTagName('div')->item(6);
if (!$ocazii) {
    trigger_error('Invalid query: ' . $connect->error);
}
if($ocazii->num_rows > 0) {
  while($parfum = $ocazii->fetch_assoc()){
    $fragment = $dom->createDocumentFragment();
    if($parfum["ocazie"] == "ziua") {
      $titlu = "<h2>Parfum de zi</h2>";
    }
    else {
      $titlu = "<h2>Parfum pentru ocazii speciale</h2>";
    }
    $fragment->appendXML('<div class="card">' . $titlu .
    '<img src="imagini/' . $parfum["nume"] . '.jpg" alt="' . $parfum["nume"] . '"> </img>' .
    '<p>' . $parfum["brand"] . ' ' . $parfum["nume"] . '</p>' .
    '<p> Ingrediente: ' . $parfum["ingrediente"] . '</p>' .
    '<p> Grup de parfumuri: ' . $parfum["categorie"] . '</p>' .
    '<p>Pret: ' . $parfum["pret"] . " RON</p></div>");
    $node->appendChild($fragment);
  }
}

$anotimpuri = array("iarna", "primavara", "vara", "toamna");

foreach ($anotimpuri as $anotimp) {
  $stmt = $connect->prepare("SELECT * FROM parfumuri WHERE anotimp = ?");
  $stmt->bind_param("s", $anotimp);
  $stmt->execute();
  $result = $stmt->get_result();
  $node = $dom->getElementById($anotimp);
  while($parfum = $result->fetch_assoc()){
    $fragment = $dom->createDocumentFragment();
    $titlu = '<h2>' . $parfum["brand"] . ' ' . $parfum["nume"] . '</h2>';
    $fragment->appendXML('<div class="card">' . $titlu .
    '<img src="imagini/' . $parfum["nume"] . '.jpg" alt="' . $parfum["nume"] . '"> </img>' .
    '<p>' . $parfum["brand"] . ' ' . $parfum["nume"] . '</p>' .
    '<p> Ingrediente: ' . $parfum["ingrediente"] . '</p>' .
    '<p> Grup de parfumuri: ' . $parfum["categorie"] . '</p>' .
    '<p>Pret: ' . $parfum["pret"] . " RON</p></div>");
    $node->appendChild($fragment);
  }
}


echo $dom->saveHTML();
?>
