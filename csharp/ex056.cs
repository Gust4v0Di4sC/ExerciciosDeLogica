// Crie um programa que leia vários números pelo teclado e mostre no final o
// somatório entre eles.
// Obs: O programa será interrompido quando o número 1111 for digitado

class Ex056
{
  public int counter = 0;
  public int soma = 0;

  public void FirstCountdown()
  {
    while (true)
    {
      Console.WriteLine("Digite um numero: ");
      int inputNumero = Convert.ToInt32(Console.ReadLine());

      if (inputNumero == 1111)
      {
        break;
      }

      soma += inputNumero;
    }
    Console.Write($"Soma : {soma}");
  }
}

