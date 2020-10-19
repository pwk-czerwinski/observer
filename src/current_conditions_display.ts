export class CurrentConditionsDisplay implements Observer, DisplayElement
{
  private temperature: number;
  private humidity: number;
  private weatherData: Subject;

  public constructor(weatherData: Subject)
  {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  public update(temperature: number, humidity: number, pressure: number): void
  {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  public display(): void
  {
    console.log("Current conditions: " + this.temperature + " C degrees and " + this.humidity + "% humidity");
  }
}
