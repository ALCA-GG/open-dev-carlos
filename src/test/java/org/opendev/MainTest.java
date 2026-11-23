package org.opendev;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import org.junit.jupiter.api.Test;

class MainTest {

    @Test
    void shouldPrintWelcomeMessage() {
        ByteArrayOutputStream output = new ByteArrayOutputStream();
        PrintStream originalOut = System.out;

        try {
            System.setOut(new PrintStream(output));
            Main.main(new String[0]);
        } finally {
            System.setOut(originalOut);
        }

        assertEquals("Welcome to OpenDev!" + System.lineSeparator(), output.toString());
    }

    @Test
    void shouldPerformBasicArithmetic() {
        assertEquals(4, 2 + 2);
    }
}
