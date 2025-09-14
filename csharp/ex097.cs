// Refaça o exercício 91, só que agora em forma de função Maior(), mas faça uma
// adaptação que vai receber TRÊS números como parâmetro e vai retornar qual foi o
// maior entre eles.


class Ex097
{
 public int MaiorValor(int valueOne, int valueTwo, int valueThree)
  {
    if (valueOne > valueTwo && valueOne > valueThree)
    {
      return valueOne;
    }
    else if (valueTwo > valueOne && valueTwo > valueThree)
    {
      return valueTwo;
    }
    else
    {
      return valueThree;
    }
  }

  public void InputValores()
  {
    Console.WriteLine("Digite o valor um: ");
    int valueOne = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Digite o valor dois: ");
    int valueTwo = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Digite o valor tres: ");
    int valueThree = Convert.ToInt32(Console.ReadLine());

    MaiorValor(valueOne, valueTwo,valueThree);
  }



  public void FirstCountdown()
  {
    InputValores();
  }
}

