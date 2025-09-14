// Faça um programa que possua uma função chamada Potencia(), que vai receber
// dois parâmetros numéricos (base e expoente) e vai calcular o resultado da
// exponenciação.
// Ex: Potencia(5,2) vai calcular 52 = 25


class Ex099
{
  public double Potencia(int bases, int exponent)
  {
    double powerValue = Math.Pow(bases, exponent);
    return powerValue;
  }

  public void FirstCountdown()
  {
    Console.WriteLine("Digite o valor da base: ");
    int valOne = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Digite o valor do exponente: ");
    int valTwo = Convert.ToInt32(Console.ReadLine());

    Potencia(valOne, valTwo);  
  }
}

