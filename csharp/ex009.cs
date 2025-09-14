/*Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.*/
using System;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using System.Globalization; // No topo do arquivo



namespace chsarp
{
  class Ex009
{
   private readonly HttpClient _httpClient;

    public Ex009()
    {
        _httpClient = new HttpClient();
    }

    public async Task<decimal?> ObterCotacaoDolarAsync()
    {
        string url = "https://economia.awesomeapi.com.br/json/last/USD-BRL";

        try
        {
            HttpResponseMessage response = await _httpClient.GetAsync(url);
            response.EnsureSuccessStatusCode();

            string json = await response.Content.ReadAsStringAsync();

            using JsonDocument doc = JsonDocument.Parse(json);
            JsonElement root = doc.RootElement;

            string? valorDolarStr = root.GetProperty("USDBRL").GetProperty("bid").GetString();

            if (decimal.TryParse(valorDolarStr, NumberStyles.Any, CultureInfo.InvariantCulture, out decimal valorDolar))
            {
                return valorDolar;
            }

            return null;
        }
        catch
        {
            return null;
        }
    }

    public decimal ConverterReaisParaDolar(decimal reais, decimal cotacaoDolar)
    {
        return reais / cotacaoDolar;
    }
}
}


