export function viewObject(obj)
{
  console.log("--Viewing Object-----------------------------");
  console.log(typeof(obj));
  var output = '';
  for (var property in obj) {
    output += property + ': ' + obj[property]+'; ';
  }
  console.log(output);
  console.log("---------------------------------------------");
}
