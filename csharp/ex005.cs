// Faça um programa que leia as duas notas de um aluno em uma matéria e mostre
// na tela a sua média na disciplina.
// Ex:
// Nota 1: 4.5
// Nota 2: 8.5
// A média entre 4.5 e 8.5 é igual a 6.5

class Ex005
{
  public double nota1;
  public double nota2;
  public void ShowAverage()
  {
    Console.WriteLine("Digite a primeira nota: ");
    nota1 = Convert.ToDouble(Console.ReadLine());

    Console.WriteLine("Digite a segunda nota: ");
    nota2 = Convert.ToDouble(Console.ReadLine());

    Console.Clear();
    Console.WriteLine($"A media entre {nota1} e {nota2} é igual a {(nota1 + nota2) / 2}");

  }
}

