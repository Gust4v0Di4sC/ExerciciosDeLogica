// Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
// média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
// não um bom aproveitamento (se ficou acima da média 7.0).


class Ex019
{

  public string? name;
  public double noteOne;
  public double noteTwo;

  public void WhatIsMyAvg()
  {
    Console.WriteLine("Digite o seu nome: ");
    name = Console.ReadLine();

    Console.WriteLine("Digite a primeira nota: ");
    noteOne = Convert.ToDouble(Console.ReadLine());

    Console.WriteLine("Digite a segunda nota: ");
    noteOne = Convert.ToDouble(Console.ReadLine());

    double avg = noteOne + noteTwo / 2;


    Console.Clear();
    if (avg >= 7.0)
    {
      Console.WriteLine($"{name}, sua media é {avg}, Bom aproveitamento");
    }
    else
    {
     Console.WriteLine($"{name}, sua media é {avg}, Não teve um bom aproveitamento");
    }

  }
}

