// Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses
// valores em dois vetores, em posições relacionadas. No final, mostre uma listagem
// contendo apenas os dados das pessoas menores de idade.

class Ex084
{
  public int[] vectorAges  = new int[9];
  public string?[] vectorNames = new string[9];


  public void FirstCountdown()
  {
    for (int i = 0; i < vectorAges.Length; i++)
    {
      vectorAges[i] = Convert.ToInt32(Console.ReadLine());
      vectorNames[i] = Console.ReadLine();
    }

    Console.WriteLine("Pessoas menores de Idade:");
    for (int j = 0; j < vectorAges.Length; j++)
    {
      if (vectorAges[j] < 18)
      {
        Console.Write($"[Nome: {vectorNames[j]}]");
        Console.Write($"[Idade: {vectorAges[j]}]");
      }
    }


   
  }
}

