import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("¿Cómo te llamas? ");
        String nombre = scanner.nextLine();

        System.out.println(buildGreeting(nombre));
    }

    static String buildGreeting(String nombre) {
        return "Hola, " + nombre + "!";
    }
}
