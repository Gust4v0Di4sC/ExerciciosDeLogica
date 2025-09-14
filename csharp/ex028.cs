// 28) Faça um programa que leia a largura e o comprimento de um terreno
// retangular, calculando e mostrando a sua área em m². O programa também
// devemostrar a classificação desse terreno, de acordo com a lista abaixo:
// - Abaixo de 100m² = TERRENO POPULAR
// - Entre 100m² e 500m² = TERRENO MASTER
// - Acima de 500m² = TERRENO VIP

class Ex028
{
  public double width;
  public double height;

  public void CouldIVote()
  {
    Console.WriteLine("Digite a largura do terreno: ");
    width = Convert.ToDouble(Console.ReadLine());

    Console.WriteLine("Digite a altura do terreno: ");
    height = Convert.ToDouble(Console.ReadLine());

    double area = width * height;


    Console.Clear();
    if (area < 100)
    {
      Console.WriteLine($"Area {area}, TERRENO POPULAR");
    }
    else if (area >= 100 && area <= 500)
    {
      Console.WriteLine($"Area {area}, TERREO MASTER");
    }
    else
    {
      Console.WriteLine($"Area {area}, TERRENO VIP");
    }

  }
}

