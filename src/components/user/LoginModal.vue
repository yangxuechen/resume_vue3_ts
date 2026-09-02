<template>
  <a-modal
    :visible="visible"
    title="用户登录"
    :confirm-loading="loading"
    ok-text="登录"
    cancel-text="取消"
    @update:visible="handleVisibleChange"
    @ok="handleSubmit"
  >
    <a-form ref="formRef" :model="formState" :rules="rules" layout="vertical">
      <a-form-item label="用户名" name="username">
        <a-input v-model:value="formState.username" autocomplete="username" />
      </a-form-item>
      <a-form-item label="密码" name="password">
        <a-input-password
          v-model:value="formState.password"
          autocomplete="current-password"
          @press-enter="handleSubmit"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { message } from "ant-design-vue";
import { login } from "@/api/user";
import type { LoginParams, LoginResponse } from "@/api/user";

export default defineComponent({
  name: "LoginModal",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    "update:visible": (visible: boolean) => typeof visible === "boolean",
    "success": (payload: any) => payload && typeof payload === "object",
  },
  setup(props, { emit }) {
    const formRef = ref<{
      validate: () => Promise<unknown>;
      resetFields: () => void;
    } | null>(null);
    const loading = ref(false);
    const formState = reactive<LoginParams>({
      username: "",
      password: "",
    });

    const rules = {
      username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
    };

    const handleVisibleChange = (visible: boolean) => {
      emit("update:visible", visible);
      // 关闭时重置表单
      if (!visible && formRef.value) {
        formRef.value.resetFields();
      }
    };

    const handleSubmit = async () => {
      const form = formRef.value;
      if (!form) {
        return;
      }

      loading.value = true;
      try {
        await form.validate();
        const username = formState.username;
        const response = await login({ ...formState });
        emit("success", { username, response });
        message.success("登录成功");
        handleVisibleChange(false);
        form.resetFields();
      } catch (error) {
        console.error("登录失败:", error);
      } finally {
        loading.value = false;
      }
    };

    return {
      formRef,
      loading,
      formState,
      rules,
      handleVisibleChange,
      handleSubmit,
    };
  },
});
</script>

<style scoped>
/* 添加任何需要的样式 */
</style>