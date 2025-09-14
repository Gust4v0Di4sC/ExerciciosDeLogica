// Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
// valores para um procedimento Somador() que vai calcular e mostrar a soma entre
// eles.


class Ex090
{

  public int Somador(int value1, int value2)
  {
    int soma = value1 + value2;
    return soma;
  }

  public void InputValores()
  {
    Console.WriteLine("Digite o valor 1: ");
    int valueOne = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Digite o valor 2: ");
    int valueTwo = Convert.ToInt32(Console.ReadLine());

    Somador(valueOne, valueTwo);
  }

  public void Main()
  {
    InputValores();
  }
}

