import { mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

import { describe, it, expect } from "vitest";

describe("HelloWorld", () => {
  it("renders message", () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.text()).toContain("sample component");
  });
});
