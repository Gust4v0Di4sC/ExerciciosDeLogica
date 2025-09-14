// Faça um algoritmo que leia o nome, o sexo e o salário de 5 funcionários e
// guarde esses dados em três vetores. No final, mostre uma listagem contendo
// apenas os dados das funcionárias mulheres que ganham mais de R$5 mil.

class Ex085
{
  public string?[] vectorNames  = new string[5];
  public int[] vectorGender  = new int[5];
  public float[] vectorSalary  = new float[5];

  public int countMultiples;


  public void FirstCountdown()
  {
    for (int i = 0; i < vectorNames.Length; i++)
    {
      Console.WriteLine("Digite o nome: ");
      vectorNames[i] = Console.ReadLine();

      Console.WriteLine($"Digite o seu Sexo, {vectorNames[i]}: 1-Masculino 2-Feminino");
      vectorGender[i] = Convert.ToInt32(Console.ReadLine());

      Console.WriteLine($"Digite seu salario, {vectorNames[i]}: ");
      vectorSalary[i] = Convert.ToSingle(Console.ReadLine());

    }

    Console.WriteLine("Mulheres que ganham mais de R$ 5 mil: ");
    for (int j = 0; j < vectorSalary.Length; j++)
    {
      if (vectorSalary[j] > 5000 && vectorGender[j] == 2)
      {
        Console.Write($"[Nome: {vectorNames[j]}]");
        Console.Write($"[Sexo: {vectorGender[j]}]");
        Console.Write($"[Salario: {vectorSalary[j]}]");
      }
    }


   
  }
}

