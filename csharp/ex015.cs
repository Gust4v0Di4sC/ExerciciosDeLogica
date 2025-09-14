// Crie um programa que leia o número de dias trabalhados em um mês e mostre o
// salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
// por hora trabalhada.

class Ex015
{
  public int workDays;

  public void ShowSalaryPerHour()
  {
    Console.WriteLine("Digite o numero de dias trabalhados: ");
    workDays = Convert.ToInt32(Console.ReadLine());

    int hours = workDays * 8;
    int salaryMonth = 25 * hours;

    Console.Clear();
    Console.WriteLine($"Esse mes você trabalhou: {workDays} dias e vai receber: R$ {salaryMonth}");
  }
}

