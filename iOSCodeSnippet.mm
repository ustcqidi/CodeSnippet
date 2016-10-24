- (void)showInParentController:(UIViewController *)controller
{
    [controller addChildViewController:self];
    [controller.view addSubview:self.view];
}
