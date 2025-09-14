// Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a
// sua terça parte.
// Ex:
// Digite um número: 3.5
// O dobro de 3.5 é 7.0
// A terça parte de 3.5 é 1.16666

class Ex007
{
  public double numero;
  
  public void ShowThirdAndDouble()
  {
    Console.WriteLine("Digite um numero: ");
    numero = Convert.ToDouble(Console.ReadLine());

    Console.Clear();
    Console.WriteLine($"O dobro de {numero} é {numero * 2}");
    Console.WriteLine($"A terça parte de {numero} é {Math.Round(numero/3,4)}");
  }
}

