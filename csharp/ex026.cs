// 26) Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando
// na tela uma das mensagens abaixo:
// - O primeiro valor é o maior
// - O segundo valor é o maior
// - Não existe valor maior, os dois são iguais

class Ex026
{
  public int valueOne;
  public int valueTwo;

  public void CouldIVote()
  {
    Console.WriteLine("Digite um valor: ");
    valueOne = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Digite outro valor: ");
    valueTwo = Convert.ToInt32(Console.ReadLine());

    
    Console.Clear();

    if (valueOne > valueTwo)
    {
      Console.WriteLine($"O primeiro valor é maior");
    }
    else if (valueOne < valueTwo)
    {
      Console.WriteLine($"O segundo valor é maior");
    }
    else
    {
      Console.WriteLine("nenhum valor é maior , os dois são iguais");
    }
    
  }
}

