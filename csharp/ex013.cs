// Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
// seu novo salário, com 15% de aumento.


class Ex013
{
  public double funcSalary;

  public void ShowSalary()
  {
    Console.WriteLine("Digite o seu salario: ");
    funcSalary = Convert.ToDouble(Console.ReadLine());

    double augment = funcSalary * 15;
    double augmentSalary = funcSalary + augment / 100;


    Console.Clear();
    Console.WriteLine($"O Salario atual é {funcSalary}, Com aumento de 15% o novo salario é {augmentSalary}");
  }
}

