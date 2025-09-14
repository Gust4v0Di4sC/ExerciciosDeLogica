// Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No
// final, mostre uma listagem com todos os nomes informados, na ordem inversa
// daquela em que eles foram informados.

class Ex077
{
  public string?[] vector = new string[7];

  public void FirstCountdown()
  {
    for (int i = 0; i < vector.Length; i++)
    {
      Console.WriteLine($"Digite o nome da pessoa {i}");
      vector[i] = Console.ReadLine();
    }


    Console.WriteLine("Lista dos nomes inversa:");
    for (int i = vector.Length-1; i >= 0; i--)
    {
      
      Console.Write($"[{vector[i]}]");
    }


    
  }
}

