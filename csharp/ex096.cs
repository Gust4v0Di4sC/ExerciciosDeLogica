// Crie um programa que tenha uma função Media(), que vai receber as 2 notas de
// um aluno e retornar a sua média para o programa principal.

class Ex096
{
  public int Media(int valueOne, int valueTwo)
  {
    int media = valueOne + valueTwo / 2;
    return media;
  }

  public void InputValores()
  {
    Console.WriteLine("Digite o valor 1");
    int value1 = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Digite o valor 2");
    int value2 = Convert.ToInt32(Console.ReadLine());

    Media(value1, value2);
  }

  public void FirstCountdown()
  {
    InputValores();
  }
}

