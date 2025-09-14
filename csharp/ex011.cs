// Desenvolva uma lógica que leia os valores de A, B e C de uma equação do
// segundo grau e mostre o valor de Delta.


class Ex011
{
  public double valueA;
  public double valueB;
  public double valueC;

  public void ShowDelta()
  {
    Console.WriteLine("Digite o valor de A: ");
    valueA = Convert.ToDouble(Console.ReadLine());

    Console.WriteLine("Digite o valor de B: ");
    valueB = Convert.ToDouble(Console.ReadLine());

    Console.WriteLine("Digite o valor de C: ");
    valueC = Convert.ToDouble(Console.ReadLine());

    double delta = Math.Pow(valueB,2) - (4 * valueA * valueC);

    Console.Clear();
    Console.WriteLine($"Com esse valores o valor de delta é: {delta}");
  }
}

