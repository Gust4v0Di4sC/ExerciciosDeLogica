// Desenvolva um programa que leia o nome de um funcionário, seu salário,
// quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de
// acordo com a tabela a seguir:
// - Até 3 anos de empresa: aumento de 3%
// - entre 3 e 10 anos: aumento de 12.5%
// - 10 anos ou mais: aumento de 20%

class Ex029
{
  public string? nome;
  public double salary;

  public int years;

  public void WhatSalary()
  {
    Console.WriteLine("Digite o seu nome: ");
    nome = Console.ReadLine();

    Console.WriteLine("Digite o seu salario: ");
    salary = Convert.ToDouble(Console.ReadLine());

    Console.WriteLine("Digite quantos anos você trabalha na empresa: ");
    years = Convert.ToInt32(Console.ReadLine());

    double thirdPercent = salary + (salary * 3 / 100);
    double twelvePercent = salary + (salary * 12.5 / 100);
    double twentyPercent = salary + (salary * 20 / 100);


    Console.Clear();
    if (years <=3)
    {
      Console.WriteLine($"Olá {nome} , você recebeu um aumento no seu salario, novo salario: {thirdPercent}");
    }
    else if (years >= 3 && years <= 10)
    {
      Console.WriteLine($"Olá {nome} , você recebeu um aumento no seu salario, novo salario: {twelvePercent}");
    }
    else
    {
      Console.WriteLine($"Olá {nome} , você recebeu um aumento no seu salario, novo salario: {twentyPercent}");
    }

  }
}

