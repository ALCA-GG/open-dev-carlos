public class Main {

    public static void main(String[] args) {
        int a = 5;
        int b = 10;

        System.out.println("Antes: a=" + a + ", b=" + b);

        int temporal = a;
        a = b;
        b = temporal;

        System.out.println("Después: a=" + a + ", b=" + b);
    }
}
