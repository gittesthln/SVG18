<?php

print <<<_EOL_
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>�A�z�z��</title>
</head>
<body>
_EOL_;
$name = {"red":"��";"black":"��"};

foreach($name as $key=>$value) {
  print "{$key}�̈Ӗ���{$value}�ł��B<br/>";
}
print <<<_EOL_
</body>
</html>
_EOL_;
?>
