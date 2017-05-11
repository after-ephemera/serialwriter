int count;
#define SWITCH_PIN 1

void setup() {
  count = 0;

  Serial.begin(9600);
  Serial.print("Serial writer demo!");
}

void loop() {
  Serial.print("Testing: ");
  Serial.println(count);
  count++;  
}
