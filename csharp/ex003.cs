
// Crie um programa que leia o nome e o salário de um funcionário, mostrando no
// final uma mensagem.
// Ex:
// Nome do Funcionário: Maria do Carmo
// Salário: 1850,45
// O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.
using System.ComponentModel;

class Ex003
{
  public string? name;
  public double salary;
  public void ShowSalary()
  {
    Console.WriteLine("Digite o seu nome: ");
    name = Console.ReadLine();

    Console.WriteLine("Digite o seu salario: ");
    salary = Convert.ToDouble(Console.ReadLine());

    Console.Clear();
    Console.WriteLine($"Nome do funcionario: {name} \n Salario: {salary}");
  }
}

