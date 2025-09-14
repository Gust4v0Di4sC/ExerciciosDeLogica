// Desenvolva um programa que leia uma distância em metros e mostre os valores
// relativos em outras medidas.
// Ex:
// Digite uma distância em metros: 185.72
// A distância de 85.7m corresponde a:
// 0.18572Km /1000
// 1.8572Hm /100
// 18.572Dam /10
// 1857.2dm *10
// 18572.0cm *100
// 185720.0mm *1000

class Ex008
{
  public double distance;

  public void ShowMeasures()
  {
    Console.WriteLine("Digite uma distância em metros: ");
    distance = Convert.ToDouble(Console.ReadLine());


    Console.Clear();
    Console.WriteLine($"A distancia de {distance} corresponde a");
    Console.WriteLine($"{distance/1000} Km");
    Console.WriteLine($"{distance/100} Hm");
    Console.WriteLine($"{distance/10} Dam");
    Console.WriteLine($"{distance*10} dm");
    Console.WriteLine($"{distance*100} cm");
    Console.WriteLine($"{distance*1000} mm");
  }
}

