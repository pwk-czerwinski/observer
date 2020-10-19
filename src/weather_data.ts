export class WeatherData implements Subject
{
  private observers: Observer[];
  private temperature: number;
  private humidity: number;
  private pressure: number;

  public constructor()
  {
    this.observers = [];
  }

  public registerObserver(o: Observer): void
  {
    this.observers = [...this.observers, o];
  }

  public removeObserver(o: Observer): void
  {
    for (let i = 0; i < this.observers.length; i++) {
      if (o.constructor.name === this.observers[i].constructor.name) {
        this.observers.splice(i, 1);
      }
    }
  }

  public notifyObservers(): void
  {
    for (let i = 0; i < this.observers.length; i++) {
      let o = this.observers[i];
      o.update(this.temperature, this.humidity, this.pressure);
    }
  }

  public measurementsChanged(): void
  {
    this.notifyObservers();
  }

  public setMeasurements(temperature: number, humidity: number, pressure: number): void
  {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;

    this.measurementsChanged();
  }
}
