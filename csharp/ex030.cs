// [DESAFIO] Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo
// de triângulo será formado:
// - EQUILÁTERO: todos os lados iguais
// - ISÓSCELES: dois lados iguais
// - ESCALENO: todos os lados diferentes

class Ex030
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
      if (segmentA == segmentB && segmentB == segmentC && segmentC == segmentA)
      {
        Console.WriteLine("Esse triangulo é equilatero");
      }
      else if (segmentA == segmentB || segmentB == segmentC || segmentC == segmentA)
      {
        Console.WriteLine("Esse triangulo é isósceles");
      }
      else
      {
        Console.WriteLine("Esse triangulo é escaleno");
      }
    }
    else
    {
      Console.WriteLine($"Nao é possivel formar um triangulo");
    }
    
  }
}
