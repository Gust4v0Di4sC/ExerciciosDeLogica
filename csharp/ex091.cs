// Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
// valores para um procedimento Maior() que vai verificar qual deles é o maior e
// mostrá-lo na tela. Caso os dois valores sejam iguais, mostrar uma mensagem
// informando essa característica.


class Ex091
{
   public int MaiorValor(int valueOne, int valueTwo)
  {
    if (valueOne > valueTwo)
    {
      return valueOne;
    }
    else if (valueTwo > valueOne)
    {
      return valueTwo;
    }
    else
    {
      Console.WriteLine("Os dois são iguais");
      return 0;
    }
  }

  public void InputValores()
  {
    Console.WriteLine("Digite o valor um: ");
    int valueOne = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Digite o valor dois: ");
    int valueTwo = Convert.ToInt32(Console.ReadLine());

    MaiorValor(valueOne, valueTwo);
  }



  public void FirstCountdown()
  {
    InputValores();
  }
}

