//  Faça um programa que leia a idade e o sexo de 5 pessoas, mostrando no final:
// a) Quantos homens foram cadastrados
// b) Quantas mulheres foram cadastradas
// c) A média de idade do grupo
// d) A média de idade dos homens
// e) Quantas mulheres tem mais de 20 anos


class Ex053
{
  public int counter = 0;
  public int soma = 0;

  public int age = 0;

  public int mans = 0;

  public int womens = 0;

  public int avgAge = 0;

  public int avgAgeMan = 0;

  public int ageMan = 0;

  public int ageWomen = 0;

  public int womenTwenty = 0;



  public void FirstCountdown()
  {
    while (counter <= 5)
    {
      Console.WriteLine("Digite sua idade: ");
      int inputAge = Convert.ToInt32(Console.ReadLine());

      Console.WriteLine("Digite seu sexo: 1[masc] 2[femin]");
      int inputGender = Convert.ToInt32(Console.ReadLine());

      if (inputGender == 1)
      {
        mans += 1;
        ageMan += 1;
        avgAgeMan = ageMan / mans;
      }
      else
      {
        womens += 1;
        if (inputAge > 20)
        {
          ageWomen += 1;
        }
      }

      soma += inputAge;
      avgAge = soma / 5;
    }
    Console.Write($"Quantidade Homens : {mans}");
    Console.Write($"Quantidade Mulheres : {womens}");
    Console.Write($"Media de idade do grupo : {avgAge}");
    Console.Write($"Media de idade dos homens : {avgAgeMan}");
    Console.Write($"Mulheres com mais de 20 : {ageWomen}");
  }
}

