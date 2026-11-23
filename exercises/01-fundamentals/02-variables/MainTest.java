import static org.junit.jupiter.api.Assertions.assertEquals;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import org.junit.jupiter.api.Test;

class MainTest {

    @Test
    void shouldSwapValues() {
        ByteArrayOutputStream output = new ByteArrayOutputStream();
        PrintStream originalOut = System.out;

        try {
            System.setOut(new PrintStream(output));
            Main.main(new String[0]);
        } finally {
            System.setOut(originalOut);
        }

        String expected = "Antes: a=5, b=10" + System.lineSeparator()
                + "Después: a=10, b=5" + System.lineSeparator();
        assertEquals(expected, output.toString());
    }
}
