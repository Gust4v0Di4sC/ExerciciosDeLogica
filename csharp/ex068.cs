// Crie um programa que leia sexo e peso de 8 pessoas, usando a estrutura
// “para”. No final, mostre na tela:
// a) Quantas mulheres foram cadastradas
// b) Quantos homens pesam mais de 100Kg
// c) A média de peso entre as mulheres
// d) O maior peso entre os homens


class Ex068
{
  public float weight;

  public int gender;

  public int totalWomen;

  public int totalMenOneHundredKg;

  public int countWeightWomen;

  public int avgWeightWomen;

  public float majorWeightMen;


  public void FirstCountdown()
  {
    for (int i = 1; i <= 8; i++)
    {
      Console.WriteLine($"Digite o seu peso: {i}");
      weight = Convert.ToSingle(Console.ReadLine());

      Console.WriteLine($"Digite o seu sexo: {i} 1-[Masculino] 2-[Feminino]");
      gender = Convert.ToInt32(Console.ReadLine());

      if (gender == 2)
      {
        totalWomen += 1;
        countWeightWomen += gender;
      }
      else
      {
        totalMenOneHundredKg += 1;
        if (weight > majorWeightMen)
        {
          majorWeightMen = weight;
        }
      }

      avgWeightWomen = countWeightWomen / totalWomen;
    }


    Console.WriteLine($"Quantas mulheres foram cadastradas {totalWomen}");
    Console.WriteLine($"Quantos homens pesam mais de 100Kg {totalMenOneHundredKg}");
    Console.WriteLine($"A média de peso entre as mulheres {avgWeightWomen}");
    Console.WriteLine($"O maior peso entre os homens {majorWeightMen}");
  }
}

