// [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
// fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
// já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
// quantos dias de vida um fumante perderá e exiba o total em dias.


class Ex016
{
  public int quantCigarretes;
  
  public int yearsSmoking;

  public void ShowTimeLife()
  {
    Console.WriteLine("Digite a quantidade de cigarros que você fuma por dia: ");
    quantCigarretes = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Digite a quantos anos você fuma: ");
    yearsSmoking = Convert.ToInt32(Console.ReadLine());

    double minutesSmoking = yearsSmoking * 525.600;
    double timeSmoking = quantCigarretes * 10;
    double timeLife = minutesSmoking * timeSmoking / 1440;


    Console.Clear();
    Console.WriteLine($"Você fuma a {yearsSmoking} anos e já perdeu: {Math.Round(timeLife)} dias de vida");
  }
}

