// [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta.
// Analise seus comprimentos e diga se é possível formar um triângulo com essas
// retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento
// de cada lado deve ser menor que a soma dos outros dois.

class Ex025
{
  public int segmentA;
  public int segmentB;
  public int segmentC;

  public void CouldIVote()
  {
    Console.WriteLine("Digite o valor do Segmento A: ");
    segmentA = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Digite o valor do Segmento B: ");
    segmentB = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Digite o valor do Segmento C: ");
    segmentC = Convert.ToInt32(Console.ReadLine());


    Console.Clear();
    if (segmentA + segmentB < segmentC && segmentB + segmentC < segmentA && segmentC + segmentA < segmentB)
    {
      Console.WriteLine($"É possivel formar um triangulo");
    }
    else
    {
      Console.WriteLine($"Nao é possivel formar um triangulo");
    }
    
  }
}

