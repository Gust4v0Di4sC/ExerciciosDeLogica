// Faça um programa que leia um número inteiro e mostre o seu antecessor e seu
// sucessor.
// Ex:
// Digite um número: 9
// O antecessor de 9 é 8
// O sucessor de 9 é 10

class Ex006
{
  public int numero;

  public void ShowAncestorAndSuccessor()
  {
    Console.WriteLine("Digite um numero: ");
    numero = Convert.ToInt32(Console.ReadLine());

    Console.Clear();
    Console.WriteLine($"O Antecessor de {numero} é {numero-1} ");
    Console.WriteLine($"O Sucessor de {numero} é {numero+1} ");
  }
}

