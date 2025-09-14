
// Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório
// entre eles.
// Ex:
// Digite um valor: 8
// Digite outro valor: 5
// A soma entre 8 e 5 é igual a 13.

class Ex004
{
  public int numero;
  public int numero2;
  public void Soma()
  {
    Console.WriteLine("Digite um numero: ");
    numero = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Digite outro numero");
    numero2 = Convert.ToInt32(Console.ReadLine());

    Console.Clear();
    Console.WriteLine($" A soma entre {numero} e {numero2} é igual a: {numero + numero2} ");
  }
}

