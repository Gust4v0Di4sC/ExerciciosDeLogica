// Um programa de vida saudável quer dar pontos atividades físicas que podem
// ser trocados por dinheiro. O sistema funciona assim:
// - Cada hora de atividade física no mês vale pontos
// - até 10h de atividade no mês: ganha 2 pontos por hora
// - de 10h até 20h de atividade no mês: ganha 5 pontos por hora
// - acima de 20h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês,
// calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

class Ex036
{
  public int hoursExercise;

  public void ExercisePoints()
  {
    Console.WriteLine("Digite a quantidade de horas que fez de atividades: ");
    hoursExercise = Convert.ToInt32(Console.ReadLine());

    int tenHoursPoints = hoursExercise * 2;
    int twentyHoursPoints = hoursExercise * 5;
    int aboveTwentyHoursPoints = hoursExercise * 10;


    Console.Clear();
    if (hoursExercise < 10)
    {
      Console.WriteLine($"realizou ate 10 horas , horas: {hoursExercise}, sua pontuação: {tenHoursPoints}, saldo em R$: {tenHoursPoints*0.05}");
    }
    else if (hoursExercise >= 10 && hoursExercise <=20)
    {
      Console.WriteLine($"realizou entre 10 e 20 horas , horas: {hoursExercise}, sua pontuação: {twentyHoursPoints}, saldo em R$: {twentyHoursPoints*0.05}");
    }
    else
    {
      Console.WriteLine($"realizou mais de 20 horas, horas: {hoursExercise} , sua pontuação: {aboveTwentyHoursPoints}, saldo em R$: {aboveTwentyHoursPoints*0.05}");
    }

  }
}

