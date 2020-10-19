import { WeatherData } from './weather_data';
import { CurrentConditionsDisplay } from './current_conditions_display';
import { StatisticsDisplay } from './statistics_display';

class WeatherStation
{
  public static run(): void
  {
    let weatherData = new WeatherData();

    let currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
    let statisticsDisplay = new StatisticsDisplay(weatherData);

    weatherData.setMeasurements(26, 65, 1013);
    weatherData.setMeasurements(30, 70, 997);
    weatherData.setMeasurements(16, 90, 1001);
    weatherData.removeObserver(currentConditionsDisplay);
    weatherData.setMeasurements(12, 65, 1013);
  }
}

WeatherStation.run();
