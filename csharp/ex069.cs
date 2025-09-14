// [DESAFIO] Desenvolva um programa que leia o primeiro termo e a razão de uma
// PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e
// a soma entre todos os valores da sequência.

class Ex069
{
  public int firstTerm;

  public int reason;

  public int generalTerm;


  public void FirstCountdown()
  {
    
    Console.WriteLine($"Digite o primeiro termo da PA: ");
      firstTerm = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine($"Digite a razao da PA");
      reason = Convert.ToInt32(Console.ReadLine());

    Console.Write($"PA: {firstTerm},");

    for (int i = 2; i <= 10; i++)
    {

      generalTerm = firstTerm + (i - 1) * reason;
      Console.Write($"{generalTerm},");
    }

  }
}

