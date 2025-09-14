// Escreva um programa que leia um número qualquer e mostre a tabuada desse
// número, usando a estrutura “para”.
// Ex: Digite um valor: 5
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15 ...


class Ex066
{
  
  public void FirstCountdown()
  {
    Console.WriteLine("Digite um valor: ");
    int inputNumber = Convert.ToInt32(Console.ReadLine());

    for (int i = 1; i < 10; i++)
    {
      Console.WriteLine($"{inputNumber} x {i} = {inputNumber * i}");
    }
  }
}

