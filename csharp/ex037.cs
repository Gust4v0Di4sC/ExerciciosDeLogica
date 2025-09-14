// Uma empresa precisa reajustar o salário dos seus funcionários, dando um
// aumento de acordo com alguns fatores. Faça um programa que leia o salário atual,
// o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa.
// No final, mostre o seu novo salário, baseado na tabela a seguir:
// - Mulheres
// - menos de 15 anos de empresa: +5%
// - de 15 até 20 anos de empresa: +12%
// - mais de 20 anos de empresa: +23%
// - Homens
// - menos de 20 anos de empresa: +3%
// - de 20 até 30 anos de empresa: +13%
// - mais de 30 anos de empresa: +25%

class Ex037
{
  public double actualRecipe;
  public int gender;
  public int yearsOfWork;

  public void CalculateRecipe()
  {
    Console.WriteLine("Digite o seu salario atual: ");
    actualRecipe = Convert.ToDouble(Console.ReadLine());

    Console.WriteLine("Digite o seu genero: 1-[masculino] 2-[feminino]: ");
    gender = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Digite quantos anos você está na empresa: ");
    yearsOfWork = Convert.ToInt32(Console.ReadLine());
    

    Console.Clear();
    switch (gender)
    {
      case 1:
        {
          if (yearsOfWork < 15)
          {
            double recipe = actualRecipe + (actualRecipe * 5 / 100);
            Console.Write($"Recebeu aumento no seu salario: {recipe}");
          }
          else if (yearsOfWork >= 15 && yearsOfWork <= 20)
          {
            double recipe = actualRecipe + (actualRecipe * 12 / 100);
            Console.Write($"Recebeu aumento no seu salario: {recipe}");
          }
          else
          {
            double recipe = actualRecipe + (actualRecipe * 23 / 100);
            Console.Write($"Recebeu aumento no seu salario: {recipe}");
          }
        }
        break;
      case 2:
        {
          if (yearsOfWork < 20)
          {
            double recipe = actualRecipe + (actualRecipe * 3 / 100);
            Console.Write($"Recebeu aumento no seu salario: {recipe}");
          }
          else if (yearsOfWork >= 20 && yearsOfWork <= 30)
          {
            double recipe = actualRecipe + (actualRecipe * 13 / 100);
            Console.Write($"Recebeu aumento no seu salario: {recipe}");
          }
          else
          {
            double recipe = actualRecipe + (actualRecipe * 25 / 100);
            Console.Write($"Recebeu aumento no seu salario: {recipe}");
          }
        }
        break;
      default: Console.WriteLine("Valor Inválido"); break;
    }


    
    

  }
}

