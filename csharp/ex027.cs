// 27) Crie um programa que leia duas notas de um aluno e calcule a sua média,
// mostrando uma mensagem no final, de acordo com a média atingida:
// - Média até 4.9: REPROVADO
// - Média entre 5.0 e 6.9: RECUPERAÇÃO
// - Média 7.0 ou superior: APROVADO

class Ex027
{
  public double noteOne;
  public double noteTwo;

  public void CouldIVote()
  {
    Console.WriteLine("Digite a sua primeira nota: ");
    noteOne = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Digite a sua segunda nota: ");
    noteOne = Convert.ToInt32(Console.ReadLine());

    double avg = noteOne + noteTwo / 2;


    Console.Clear();
    if (avg <= 4.9)
    {
      Console.WriteLine($"Você tem {avg} media, Reprovado");
    }
    else if (avg >= 5.0 && avg <= 6.9)
    {
       Console.WriteLine($"Você tem {avg} media, Recuperação");
    }
    else
    {
       Console.WriteLine($"Você tem {avg} media, Aprovado");
    }

  }
}

