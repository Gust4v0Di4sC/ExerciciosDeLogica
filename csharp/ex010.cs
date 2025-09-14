/*Faça um algoritmo que leia a largura e altura de uma parede, calcule e
mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
sabendo que cada litro de tinta pinta uma área de 2metros quadrados.*/

class Ex010
{
  public double width;
  public double height;

  public void CalculateBrickPaint()
  {
    Console.WriteLine("Digite a largura em metros: ");
    width = Convert.ToDouble(Console.ReadLine());

    Console.WriteLine("Digite a altura em metros: ");
    height = Convert.ToDouble(Console.ReadLine());

    double area = width * height;
    double paintingArea = area / 2;


    Console.Clear();
    Console.WriteLine($"A area da parede é {area} Metros, são necessários 🎨🪣 {paintingArea} Litros de tinta");
  }
}

