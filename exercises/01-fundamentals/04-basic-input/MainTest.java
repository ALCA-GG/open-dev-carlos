import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class MainTest {

    @Test
    void shouldBuildGreeting() {
        assertEquals("Hola, Ana!", Main.buildGreeting("Ana"));
    }
}
