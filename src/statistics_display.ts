export class StatisticsDisplay implements Observer, DisplayElement
{
  private minTemperature: number;
  private avgTemperature: number;
  private maxTemperature: number;
  private weatherData: Subject;
  private firstMeasurement = true;

  public constructor(weatherData: Subject)
  {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  public update(temperature: number, humidity: number, pressure: number): void
  {
    if (!this.firstMeasurement) {
      if (temperature > this.maxTemperature) {
        this.maxTemperature = temperature;
      } else if (temperature < this.minTemperature) {
        this.minTemperature = temperature;
      }

      this.avgTemperature = (this.avgTemperature + temperature) / 2;
    } else {
      this.minTemperature = this.avgTemperature = this.maxTemperature = temperature;
      this.firstMeasurement = false;
    }

    this.display();
  }

  public display(): void
  {
    console.log(`Min / Avg / Max temperature = ${this.minTemperature} / ${this.avgTemperature} / ${this.maxTemperature}`);
  }
}
