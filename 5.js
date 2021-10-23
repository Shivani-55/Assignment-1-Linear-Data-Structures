//Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

var n = 3;

function towerOfHanoi(n, from_rod,  to_rod,  aux_rod)
{
  if (n == 1)
  {
    console.log("Move disk 1 from rod " + from_rod + " to rod " + to_rod);
    return;
  }
  towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
  console.log("Move disk " + n + " from rod " + from_rod + " to rod " + to_rod);
  towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}
 
towerOfHanoi(n, 'A', 'C', 'B');  