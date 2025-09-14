// Escreva um programa que leia 15 números e guarde-os em um vetor. No final,
// mostre o vetor inteiro na tela e em seguida mostre em que posições foram
// digitados valores que são múltiplos de 10.

class Ex078
{
  public int[] vector  = new int[15];

  public int countMultiples;


  public void FirstCountdown()
  {
    for (int i = 0; i < vector.Length; i++)
    {
      Console.WriteLine("Digite um numero: ");
      vector[i] = Convert.ToInt32(Console.ReadLine());

      Console.Write($"[{vector[i]}]");
    }

    Console.WriteLine("Posiçoes dos multiplos de 10:");
    for (int j = 0; j < vector.Length; j++)
    {
      if (vector[j] % 10 == 0)
      {
        Console.Write($"[{j}]");
      }
    }


   
  }
}

