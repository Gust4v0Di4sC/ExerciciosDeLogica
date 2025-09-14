using System;
using chsarp;
using System.Globalization;

namespace csharp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // Ex001 ex001 = new Ex001();
            // ex001.Starter();

            // Ex002 ex002 = new Ex002();
            // ex002.Saudation();

            // Ex003 ex003 = new Ex003();
            // ex003.ShowSalary();

            // Ex004 ex004 = new Ex004();
            // ex004.Soma();

            // Ex005 ex005 = new Ex005();
            // ex005.ShowAverage();

            // Ex006 ex006 = new Ex006();
            // ex006.ShowAncestorAndSuccessor();

            // Ex007 ex007 = new Ex007();
            // ex007.ShowThirdAndDouble();

            //Ex008 ex008 = new Ex008();
            //ex008.ShowMeasures();

            /*Console.Write("Quanto dinheiro você tem na carteira (R$)? ");
            string? entrada = Console.ReadLine();

            if (!decimal.TryParse(entrada.Replace(',', '.'), NumberStyles.Any, CultureInfo.InvariantCulture, out decimal valorReais))
            {
                Console.WriteLine("Valor inválido.");
                return;
            }

            var conversor = new Ex009();
            decimal? cotacao = await conversor.ObterCotacaoDolarAsync();

            if (cotacao == null)
            {
                Console.WriteLine("Erro ao obter a cotação do dólar.");
                return;
            }

            decimal valorDolares = conversor.ConverterReaisParaDolar(valorReais, cotacao.Value);
            Console.WriteLine($"Com R$ {valorReais:F2}, você pode comprar US$ {valorDolares:F2} (cotação atual: {cotacao.Value:F2})");*/

            Ex077 ex077 = new Ex077();
            ex077.FirstCountdown();

        }
    }
}

